'use client';
import React, { useState } from 'react';
import { useGetUser } from '@/services/queries/doctor.query';
import { useSetSchedule } from '@/services/mutations/set-schedule.mutation';
import { DayAvailability } from '@/constants/availability';

// SET SCHEDULE PAGE
const DoctorHome = () => {
  // get logged in doctor profile
  const { data, error, status } = useGetUser();
  // console.log(data?.user?.id);

  // get availabilty from backend
  const [availability, setAvailability] = useState<DayAvailability[]>([
    {
      id: 1,
      day: 'Monday',
      abbr: 'Mon',
      enabled: false,

      slots: [],
    },
    {
      id: 2,
      day: 'Tuesday',
      abbr: 'Tue',
      enabled: false,

      slots: [],
    },
    {
      id: 3,
      day: 'Wednesday',
      abbr: 'Wed',
      enabled: false,

      slots: [],
    },
    {
      id: 4,
      day: 'Thursday',
      abbr: 'Thu',
      enabled: false,

      slots: [],
    },
    {
      id: 5,
      day: 'Friday',
      abbr: 'Fri',
      enabled: false,

      slots: [],
    },
  ]);

  // POST Dr Schedule
  const { mutateAsync, isPending } = useSetSchedule();
  const setDoctorSchedule = async () => {
    // post
    await mutateAsync(
      {
        doctor_id: 0,
        dto: {
          day: availability[0].day,
          timeFrom: availability[0].slots[0].from,
          timeTo: availability[0].slots[0].from,
        },
      },
      {
        onSuccess(data, variables, context) {
          console.log(data);
        },
        onError(error, variables, context) {
          console.log(error);
        },
      }
    );
    // console.log(availability);
    // alert('Schedule Set');
  };

  // update the value of ONE input (from / to) in ONE slot
  const handleSlotChange = (
    dayIdx: number,
    slotIdx: number,
    field: 'from' | 'to',
    value: string
  ) => {
    const clone = [...availability];
    if (clone[dayIdx].slots.length > 1) {
      clone[dayIdx].slots[length];
    }
    setAvailability((prev) => {
      const clone = [...prev];
      clone[dayIdx].slots[slotIdx][field] = value;
      return clone;
    });
  };

  // add an empty row
  const addEmptySlot = (dayIdx: number) => {
    setAvailability((prev) => {
      const clone = [...prev];
      clone[dayIdx].slots.push({ from: '', to: '' }); // 👈 new blank row
      return clone;
    });
    const clone = [...availability];
    const indx = clone[dayIdx].slots.length + 1;
    removeSlot(dayIdx, indx);
  };

  // remove a row
  const removeSlot = (dayIdx: number, slotIdx: number) => {
    setAvailability((prev) => {
      const clone = [...prev];
      clone[dayIdx].slots.splice(slotIdx, 1);
      return clone;
    });
  };

  return (
    <div className=" flex flex-col p-6">
      {/* heading */}
      <div className="text-black font-semibold text-3xl mb-8">
        Select Your Weekly Availability
      </div>

      {/* Box*/}
      <div className="flex flex-col gap-10">
        {/* subheading */}
        <div className="flex flex-row text-black font-semibold text-xl gap-10 lg:gap-20">
          <div className="w-5 h-5"></div>
          <div className="w-[82px] md:w-[140px]">Select Day</div>
          <div className="grow-1">Select Time</div>
        </div>
        {/* row - sunday */}
        <div className="flex flex-row items-center gap-10 lg:gap-20 text-[15px] ">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-[82px] md:w-[140px] text-gray-400">Sunday</p>
          <p className="grow-1  text-gray-400">Unavailable</p>
        </div>
        {/* MONDAY_FRIDAY ROWS */}
        {availability.map((day, idx) => (
          <div
            key={day.id}
            className="flex flex-row items-center gap-10 lg:gap-20 text-[15px]"
          >
            <div className="h-5 w-5">
              <input
                className="peer border-1 border-gray-500 h-5 w-5"
                type="checkbox"
                checked={day.enabled}
                onChange={(e) => {
                  const updated = [...availability];
                  updated[idx].enabled = e.target.checked;
                  // adds blank row to array when checkbox is ticked
                  // empty row eeded because of mapping otherwise shows blank
                  if (e.target.checked && updated[idx].slots.length === 0) {
                    updated[idx].slots = [{ from: '', to: '' }];
                  }
                  // empties all time slots for that index if check box is unchecked
                  if (!e.target.checked && updated[idx].slots.length > 0) {
                    updated[idx].slots = [];
                  }
                  setAvailability(updated);
                }}
              />
            </div>
            <p className="w-[82px] md:w-[140px]  peer-checked:text-black text-gray-400">
              {day.day}
            </p>

            {/* Time inputs */}
            <div className="flex flex-col gap-2 grow">
              {day.enabled ? (
                day.slots.map((slot, slotIdx) => (
                  <div key={slotIdx} className="flex items-center gap-2">
                    <span>From:</span>
                    <input
                      type="time"
                      className="border border-gray-300 rounded-[5px] px-2 py-1 lg:w-50"
                      value={slot.from}
                      onChange={(e) =>
                        handleSlotChange(idx, slotIdx, 'from', e.target.value)
                      }
                    />
                    <span>To:</span>
                    <input
                      type="time"
                      className="border border-gray-300 rounded-[5px] px-2 py-1 lg:w-50"
                      value={slot.to}
                      onChange={(e) =>
                        handleSlotChange(idx, slotIdx, 'to', e.target.value)
                      }
                    />

                    {/* + is active on the last row only */}
                    {slotIdx === day.slots.length - 1 ? (
                      <button
                        onClick={() => addEmptySlot(idx)}
                        className="ml-2 bg-primary text-white font-semibold text-xl h-5 w-5 rounded-[4px] flex items-center justify-center pb-[2px] "
                      >
                        +
                      </button>
                    ) : (
                      <button
                        disabled
                        onClick={() => addEmptySlot(idx)}
                        className="ml-2 bg-gray-400 text-white font-semibold text-xl h-5 w-5 rounded-[4px] flex items-center justify-center pb-[2px] "
                      >
                        +
                      </button>
                    )}

                    {/* – is active on every row except the very first */}
                    {day.slots.length > 1 ? (
                      <div className="">
                        <button
                          onClick={() => removeSlot(idx, slotIdx)}
                          className="ml-1 bg-white text-black font-semibold text-xl h-5 w-5 border border-gray-500 rounded-[4px] flex items-center justify-center pb-[2px] "
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <div className="">
                        <button
                          disabled
                          onClick={() => removeSlot(idx, slotIdx)}
                          className="ml-1 bg-gray-400 text-white font-semibold text-xl h-5 w-5 border border-gray-500 rounded-[4px] flex items-center justify-center pb-[2px] "
                        >
                          -
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                /* day not enabled → show disabled inputs exactly like before */
                <div className="flex gap-2 items-center text-gray-400">
                  <span>From:</span>
                  <input
                    type="time"
                    disabled
                    className="border border-gray-300 rounded-[5px] px-2 py-1 lg:w-50"
                  />
                  <span>To:</span>
                  <input
                    type="time"
                    disabled
                    className="border border-gray-300 rounded-[5px] px-2 py-1 lg:w-50"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        {/* row - saturday */}
        <div className="flex flex-row items-center gap-10 lg:gap-20 text-[15px]">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-[82px] md:w-[140px] text-gray-400">Saturday</p>
          <p className="grow-1  text-gray-400">Unavailable</p>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end mt-10 gap-2">
        <button
          onClick={() => setDoctorSchedule()}
          className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DoctorHome;
