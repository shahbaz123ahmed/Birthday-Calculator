import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
	const [birth, setBirth] = useState('');
	const [today, setToday] = useState(moment().format('YYYY-MM-DD'));
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		// Set initial mode based on user preference or system settings
		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		setDarkMode(userPrefersDark);
	}, []);

	const changeBirthHandler = (e) => {
		setBirth(e.target.value);
	};

	const changeTodayHandler = (e) => {
		setToday(e.target.value);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	function getYearsMonthsDays(date1, date2) {
		const a = moment(date1);
		const b = moment(date2);
		let years = a.diff(b, 'year');
		b.add(years, 'years');

		const noOfDaysInb = b.daysInMonth();
		const noOfDaysIna = a.daysInMonth();
		let months = 0;
		if (noOfDaysInb > noOfDaysIna) {
			months = b.diff(a, 'months');
			a.add(months, 'months');
		} else {
			months = a.diff(b, 'months');
			b.add(months, 'months');
		}
		let days = a.diff(b, 'days');

		let totalYears = Math.abs(years);
		let totalMonths = Math.abs(months);
		let totalDays = Math.abs(days);

		if (totalMonths === 0 && totalDays === 0 && totalYears > 0) {
			return `Happy Birthday! 🎉 You're ${totalYears} years old!`;
		}

		return `${totalYears} Years ${totalMonths} Months ${totalDays} Days`;
	}

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900 dark:bg-gray-100">
				<div className="md:w-2/5 w-10/12">
					<header className="flex justify-between items-center py-4 mb-5">
						<h1 className="text-white dark:text-black text-3xl text-center font-sans font-semibold">
							Age Calculator
						</h1>
						<button
							onClick={toggleDarkMode}
							className="px-3 py-1 rounded bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-200"
						>
							{darkMode ? 'Light Mode' : 'Dark Mode'}
						</button>
					</header>

					<div className="flex flex-col rounded mx-auto bg-gray-500 dark:bg-gray-200 px-6 py-8 w-full">
						<label className="block text-white dark:text-black text-sm font-bold mb-2" htmlFor="birth">
							Birthday
						</label>
						<input
							value={birth.length > 0 ? birth : today}
							onChange={changeBirthHandler}
							type="date"
							name="birth"
							id="birth"
							className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full"
							placeholder="Birthday"
						/>

						<label className="block text-white dark:text-black text-sm font-bold mb-2" htmlFor="today">
							Today
						</label>
						<input
							value={today}
							onChange={changeTodayHandler}
							type="date"
							name="today"
							id="today"
							className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full"
							placeholder="Today"
						/>

						<h3 className="text-center lg:text-2xl md:text-lg text-base font-semibold text-white dark:text-black">
							{birth.length > 0 && today.length > 0 ? getYearsMonthsDays(birth, today) : ''}
						</h3>
					</div>

					<footer className="flex justify-center mt-6 space-x-4">
						<a
							href="https://github.com/yourusername"
							className="text-white dark:text-black"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a
							href="https://linkedin.com/in/yourusername"
							className="text-white dark:text-black"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
