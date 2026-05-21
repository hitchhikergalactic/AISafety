import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import QueHacemos from './pages/QueHacemos';
import SeminarioHub from './pages/SeminarioHub';
import DetalleCharla from './pages/DetalleCharla';

// --- Types ---
type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

export default function App() {
	const [lang, setLang] = useState<Language>(() => (localStorage.getItem('app_lang') as Language) || 'es');
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('app_theme') as Theme) || 'light');

	useEffect(() => {
		localStorage.setItem('app_lang', lang);
		document.documentElement.lang = lang;
	}, [lang]);

	useEffect(() => {
		localStorage.setItem('app_theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	return (
		<div className="min-h-screen transition-colors duration-500 selection:bg-principal selection:text-white">
			<Routes>
				<Route path="/" element={<Home lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />} />
				<Route path="/que_hacemos" element={<QueHacemos lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />} />
				<Route path="/seminario-bluedot-spain" element={<SeminarioHub lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />} />
				<Route path="/seminario-bluedot-spain/:charlaId" element={<DetalleCharla lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}
