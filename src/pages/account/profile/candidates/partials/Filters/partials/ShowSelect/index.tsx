type Props = {
	value: number;
	handleFilters: (filter: string, value: string | number) => void;
};

const ShowSelect = ({ value, handleFilters }: Props) => {
	return (
		<select value={value} onChange={(e) => handleFilters('limit', e.target.value)}>
			<option value={8}>8</option>
			<option value={12}>12</option>
			<option value={16}>16</option>
		</select>
	);
};

export default ShowSelect;
