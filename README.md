# Dead Simple Svelte Tables

This simple table component allows you to easily create tables by just providing the table component and the data. There's no need to define columns or configure numerous options. It's perfect for quickly generating simple tables.

## Just a table

```svelte
<Table {data} />
```

Put your data, and that's it!

### How should I style it ?

You can style the table by creating a CSS file and applying styles to the semantic table elements. Here's an example:

Create a `table.css` file with the following content:

```css
table {
	width: 100%;
	border-collapse: collapse;
}

th,
td {
	border: 1px solid #ddd;
	padding: 8px;
}

th {
	background-color: #f2f2f2;
	text-align: left;
}
```

Then, import this CSS file in your Svelte component:

```js
import './table.css';
```

This will apply the styles to your table, making it look more polished and readable.

### But do you have any styles ready?

Not at this point of the project, but preferably yes!
You can also use some ready table styles like "pico.css" or many others.

### What about row actions? How to manage these?

Good one! Here and there you need to manage data in tables by going to row details, quick edit or delete row. All these are crucial for a table components. We are using just urls for buttons, or any snippet using an id for a row .
