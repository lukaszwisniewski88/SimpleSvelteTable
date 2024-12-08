import { render } from '@testing-library/svelte/svelte5';
import Table from './Table.svelte';

describe('SvelteKit Table', () => {
	test('should render all the headers', async () => {
		const screen = render(Table, {
			data: [{ id: 1, name: 'John Doe', age: 25 }]
		});

		expect(screen.getByRole('table')).toBeInTheDocument();
		expect(screen.getByText('id')).toBeInTheDocument();
	});
	test('should render all the rows', async () => {
		const screen = render(Table, {
			data: [{ id: 1 }, { id: 2 }, { id: 3 }]
		});
		expect(screen.getByRole('table')).toBeInTheDocument();
		['1', '2', '3'].forEach((v) => {
			expect(screen.getByText(v)).toBeInTheDocument();
		});
	});
	test('should render empty state when no data is passed', async () => {
		const screen = render(Table, {
			data: []
		});
		expect(screen.getByText('No data')).toBeInTheDocument();
	});
});
