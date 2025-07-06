'use client';
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useParams } from 'next/navigation';
import {
    useGetDoctorProfile,
    useGetUser,
} from '@/services/queries/doctor.query';
import { getWeekDays } from '@/utils/weekdays';
import moment from 'moment';
import { useCreateAppointment } from '@/services/mutations/create-appointment.mutation';
import { date } from 'yup';

let active = false;

const BookAppointment = () => {
    // user id from params
    const params = useParams<{ id: string }>();
    const id = +params.id;

    // fetch doctor to display on screen from id param
    const { data, error } = useGetDoctorProfile(id);

    // fetch user for id
    const user = useGetUser();
    // console.log('USER: ', user.data?.user?.id);

    // TODO: get from backend rn hardcoded
    const availability = ['Mon', 'Wed', 'Fri'];

    const doctor = {
        id: data?.user?.id,
        name: data?.user?.name,
        specialization: data?.user?.doctor_detail?.specialization,
        availability,
        experience: data?.user?.doctor_detail?.yearsOfExp,
        rating: data?.user?.doctor_detail?.rating,
        introduction: data?.user?.doctor_detail?.introduction,
    };

    const [appointmentTimings, setAppointmentTimings] = useState<
        { id: number; day: string; timings: string[] }[]
    >([
        {
            id: 1,
            day: 'Mon',
            timings: ['09:00:00', '10:00:00', '11:00:00', '12:00:00'],
        },
        {
            id: 2,
            day: 'Wed',
            timings: [
                '09:00:00',
                '13:30:00',
                '15:30:00',
                '16:00:00',
                '17:00:00',
            ],
        },
        {
            id: 3,
            day: 'Fri',
            timings: [
                '12:00:00',
                '13:30:00',
                '18:00:00',
                '19:30:00',
                '22:00:00',
            ],
        },
    ]);

    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const { mutateAsync, isPending } = useCreateAppointment();
    // which day id is selected?
    const [selectedDayId, setSelectedDayId] = useState<number>(1);

    // find the selected day object
    const selectedDay = appointmentTimings.find((d) => d.id === selectedDayId);
    if (!selectedDay) throw new Error();

    const week = getWeekDays();
    // find the matching object once instead of mapping whole array
    function dateFor(day: string | undefined) {
        return week.find((d) => d.dayName === day)?.dayDate ?? '';
    }
    // gives date acc to abbreviation
    const dateOfCurrentWeek = (abbrev: string) => {
        const idx = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(
            abbrev
        );
        const today = new Date();
        const monday = new Date(today);
        monday.setDate(today.getDate() - ((today.getDay() + 6) % 7) + idx);
        return monday.toISOString().slice(0, 10);
    };

    const createAppointment = async () => {
        const time24 = moment(time, 'hh:mm A').format('HH:mm:ss');
        const abbrev = selectedDay.day;
        const date = dateOfCurrentWeek(abbrev);

        // console.log(time24, selectedDay.day, date, reason);

        await mutateAsync(
            {
                doctor_id: id,
                patient_id: user.data?.user?.id,
                dto: {
                    appt_date: date,
                    appt_time: time24,
                    patient_complaint: reason,
                    appt_status: 'confirmed',
                },
            },
            {
                onSuccess(data, variables, context) {
                    alert('Appointment has been created successfully!');
                },
                onError(error, variables, context) {
                    alert('Error creating appointment, try again.');
                },
            }
        );
    };

    return (
        <div className="p-6">
            <div>
                <div className="text-black font-semibold text-3xl mb-8">
                    Book Appointment
                </div>
                {/* doctor details */}
                <div
                    key={doctor.id}
                    className="border-2 border-gray-400  rounded-[8px] py-5 px-4 mb-8"
                >
                    <div className="flex items-center gap-5 mb-4">
                        <div className="bg-[var(--primary-color)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                            <FiUser className="text-white w-6 h-6 " />
                        </div>
                        <div>
                            <div className="font-bold text-xl">
                                Dr. {doctor.name}
                            </div>
                            <div className="text-primary font-medium text-4">
                                {doctor.specialization}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="flex gap-6 ">
                            <div>
                                Availability:{' '}
                                {doctor.availability.map((i) => i + ' ')}
                            </div>
                            <div>{doctor.experience} Years of Experience</div>
                            <div>{doctor.rating} star rating</div>
                        </div>
                        <div className="mt-6">{doctor.introduction}</div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-black font-semibold text-3xl mb-8">
                    Select Day
                </h2>
                <div className="flex flex-wrap gap-4 mb-6 justify-between">
                    {appointmentTimings.map((day) => {
                        const isActive = day.id === selectedDayId;
                        const dateLabel = dateFor(day.day);

                        return (
                            <div key={day.id} className="w-[30%]">
                                <p className="px-10 py-3 mb-4 text-xl text-primary text-center">
                                    {day.day}
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSelectedDayId(day.id)}
                                    className={`w-full rounded-[5px] text-xl px-14 py-3 text-center cursor-pointer
                    ${
                        isActive
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-black hover:bg-primary hover:text-white'
                    }`}
                                >
                                    {dateLabel}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <h2 className="text-black font-semibold text-3xl mb-8">
                    Select Time
                </h2>
                {selectedDay && (
                    <div className="grid grid-cols-6 gap-3 mb-8">
                        {selectedDay.timings.map((t, idx) => {
                            const time12 = moment(t, 'HH:mm:ss').format(
                                'hh:mm A'
                            );

                            return (
                                <button
                                    key={`${selectedDay.id}-${idx}`}
                                    type="button"
                                    onClick={() => {
                                        // console.log('click');

                                        setTime(time12);
                                    }}
                                    className={` rounded-[5px] text-[15px] px-14 py-3 text-center cursor-pointer
                              ${
                                  active
                                      ? 'bg-primary text-white'
                                      : 'hover:bg-primary hover:text-white bg-gray-200 text-black '
                              } `}
                                >
                                    {time12}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div>
                <div className="text-black font-semibold text-3xl ">
                    Reason for Appointment
                </div>
                <div>
                    <textarea
                        name="complaint"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Enter your complaint here..."
                        className="border-1 border-gray-300 px-4 py-3 mt-6 rounded-[5px] w-full h-32"
                    ></textarea>
                </div>
                {/* button */}
                <div className="flex justify-end mt-10 mr-10 w-full">
                    <button
                        type="submit"
                        onClick={() => createAppointment()}
                        className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
