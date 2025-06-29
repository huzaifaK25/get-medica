type Props = {
  onChange: (value: string) => void;
};

const Dropdown = ({ onChange }: Props) => {
  let selected;
  return (
    <select
      id="specialization"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10 text-gray-600"
    >
      <option value="" disabled>
        Select specialization
      </option>
      <option value="orthopedics">Orthopedics</option>
      <option value="dermatology">Dermatology</option>
      <option value="pediatrics">Pediatrics</option>
      <option value="general surgery">General Surgery</option>
      <option value="radiology">Radiology</option>
    </select>
  );
};

export default Dropdown;
