import Link from 'next/link';

type Props = {
	breadcrumbTitle: string;
	breadcrumbActive: string;
};

const Breadcrumb = ({ breadcrumbTitle, breadcrumbActive }: Props) => {
	return (
		<div className="box-heading">
			<div className="box-title">
				<h3 className="mb-35">{breadcrumbTitle}</h3>
			</div>
			<div className="box-breadcrumb">
				<div className="breadcrumbs">
					<ul>
						<li>
							<Link className="icon-home" href="/">
								Admin
							</Link>
						</li>
						<li>
							<span>{breadcrumbActive}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
