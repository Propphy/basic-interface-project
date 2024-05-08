import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'Started project' }, { name: 'description', content: 'Initial project' }];
};

export default function HomePage() {
	return (
		<div className='container mx-auto'>
			<h1 className='text-center text-3xl font-bold'>Basic Interface Project</h1>
		</div>
	);
}
