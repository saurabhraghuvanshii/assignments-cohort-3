import React, { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions";

const Timer = () => {
	const [time, setTime] = useState(0);
	const [initialTime, setInitialTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [editState, setEditState] = useState({ field: null, value: "" });

	// useEffect(() => {

	// 	let interval;
	// 	if (isRunning) {
	// 		interval = setInterval(() => {
	// 			setTime((c) => c + 1);
	// 		}, 1000);
	// 	} else if (!isRunning && time !== 0) {
	// 		clearInterval(interval);
	// 	}
	//   return () => clearInterval(interval);
	// }, [isRunning,time]);

	// return (
	// 	<div>
	// 		{time}
	// 		<button onClick={() => setIsRunning(true)}>Start</button>
	// 		<button onClick={() => setIsRunning(false)}>Stop</button>
	//     <button onClick={() => setTime(0)}>Reset</button>
	// 	</div>
	// );

	useEffect(() => {
		const progress =
			initialTime > 0 ? ((initialTime - time) / initialTime) * 100 : 0;
		document.documentElement.style.setProperty("--progress", `${progress}%`);
	}, [time, initialTime]);

	useEffect(() => {
		let interval = null;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!isRunning || time === 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isRunning]);

	const handleEditField = (field) => {
		if (editState.field === field) {
			const newTime = {
				...formatTime(time),
				[field]: editState.value.padStart(2, "0"),
			};
			const calculatedTime = calculateTime(
				newTime.hours,
				newTime.minutes,
				newTime.seconds
			);
			setTime(calculatedTime);
			setInitialTime(calculatedTime);
			setEditState({ field: null, value: "" });
		} else {
			setIsRunning(false);
			setEditState({ field, value: formatTime(time)[field].replace(/^0+/, "") });
		}
	};

	const handleInputChange = (e) => {
		const value = e.target.value.replace(/\D/g, "").slice(0, 2);
		setEditState((prevState) => ({ ...prevState, value }));
	};

	const { hours, minutes, seconds } = formatTime(time);

	return (
		<div className={style.timeApp}>
			<div className={style.timerDisplay}>
				<div className={style.timerCircle}>
					<div className={style.timerTime}>
						{editState.field === "hours" ? (
							<input
								className={style.timeInput}
								type="text"
								value={editState.value}
								onChange={handleInputChange}
								onBlur={() => handleEditField("hours")}
								autoFocus
							/>
						) : (
							<span
								className={style.timeUnit}
								onClick={() => handleEditField("hours")}
							>
								{hours}
							</span>
						)}
						:
						{editState.field === "minutes" ? (
							<input
								className={style.timeInput}
								type="text"
								value={editState.value}
								onChange={handleInputChange}
								onBlur={() => handleEditField("minutes")}
								autoFocus
							/>
						) : (
							<span
								className={style.timeUnit}
								onClick={() => handleEditField("minutes")}
							>
								{minutes}
							</span>
						)}
						:
						{editState.field === "seconds" ? (
							<input
								className={style.timeInput}
								type="text"
								value={editState.value}
								onChange={handleInputChange}
								onBlur={() => handleEditField("seconds")}
								autoFocus
							/>
						) : (
							<span
								className={style.timeUnit}
								onClick={() => handleEditField("seconds")}
							>
								{seconds}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className={style.actionButtons}>
				<button
					className={style.actionButton}
					onClick={() => setIsRunning(!isRunning)}
				>
					{isRunning ? "Pause" : "Start"}
				</button>
				<button
					className={style.actionButton}
					onClick={() => {
						setTime(0);
						setInitialTime(0);
						setIsRunning(false);
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Timer;
