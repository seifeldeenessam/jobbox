import { QueryOptions } from '@/types/queries';
import ShowSelect from './partials/ShowSelect';

type Props = {
	filters: QueryOptions;
	handleFilters: (filter: string, value: string | number) => void;
	handleReset: () => void;
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Filters = ({ filters, handleFilters, handleReset }: Props) => {
	return (
		<div className="row mb-30">
			<div className="col-12">
				<div className="box-list-character mb-15">
					<ul>
						{alphabet.map((letter) => (
							<li key={letter} onClick={() => handleFilters('letter', letter)} style={{ cursor: 'pointer' }}>
								<a className={filters.letter === letter ? 'active' : ''}>{letter}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="d-flex justify-content-end">
					<button className="btn btn-default hover-up" onClick={handleReset}>
						Reset
					</button>
					<div className="select-box">
						<ShowSelect handleFilters={handleFilters} value={filters.limit || 8} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
