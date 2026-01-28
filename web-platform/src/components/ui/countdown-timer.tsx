'use client';

import { useState, useEffect } from 'react';
import { FadeIn } from './animations';

interface CountdownTimerProps {
    targetDate: string; // ISO string format
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }

            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeBox = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 sm:mx-4">
            <div className="bg-white text-blue-900 font-bold text-3xl sm:text-5xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl shadow-lg border-b-4 border-blue-200">
                {value < 10 ? `0${value}` : value}
            </div>
            <span className="text-blue-100 text-xs sm:text-sm font-medium mt-2 uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <FadeIn>
            <div className="flex justify-center flex-wrap gap-y-4">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
        </FadeIn>
    );
}
