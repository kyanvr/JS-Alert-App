/* eslint-disable no-tabs */

/**
 * Elements library
 */

const Elements = {
	// create a header, adjust size and textcontent
    createHeader({ size = 1, textContent = '', className = '' }) {
        if (size < 1 || size > 6) return null;
        const header = document.createElement(`h${size}`);
        header.textContent = textContent;
		header.className = className;
        return header;
    },

	// create a div container, append children
	createContainer({
		className = '', id = '', innerHTML = '', children = [],
		}) {
		const container = document.createElement('div');
		if (id) container.setAttribute('id', id);
		container.className = className;
		container.innerHTML = innerHTML;
		if (children.length) {
			children.forEach((child) => {
			if (child instanceof Element) {
				container.appendChild(child);
			}
			});
		}
		return container;
		},

		// create a button, add onClick event
	createButton({
 textContent = '', onClick = null, innerHTML = '', className = '',
}) {
		const button = document.createElement('button');
		button.textContent = textContent;
		if (innerHTML) button.innerHTML = innerHTML;
		if (onClick) button.addEventListener('click', () => { onClick(); });
		if (className) button.classList.add(className);
		return button;
	},

	// create an anchor element
	createLink({
 href = '#', textContent = '', target = '_self', className = '', attribute = '',
}) {
		const a = document.createElement('a');
		a.href = href;
		a.textContent = textContent;
		a.target = target;
		a.className = className;
		if (attribute) a.setAttribute(attribute, '');
		return a;
	},

	// create a list
	createList({ items = [], ordered = false }) {
		const list = document.createElement(ordered ? 'ol' : 'ul');
		items.forEach(({ textContent, href, onClick }) => {
			const li = document.createElement('li');
			if (!href && !onClick) {
				li.textContent = textContent;
			} else if (href) {
				li.appendChild(Elements.createLink({
					textContent,
					href,
				}));
			} else {
				li.appendChild(Elements.createButton({
					textContent,
					onClick,
				}));
			}

			list.appendChild(li);
		});

		return list;
	},

	// create a form, append children
	createForm({ className = '', id = '', children = [] }) {
		const form = document.createElement('form');
		form.classList.add(className);
		form.id = id;
		form.autocomplete = 'off';
		if (children.length) {
			children.forEach((child) => {
			if (child instanceof Element) {
				form.appendChild(child);
			}
			});
		}
		return form;
	},

	// create an img element, add src and alt
	createImage({
		className = '', id = '', src, alt = '',
	}) {
		const image = document.createElement('img');
		image.src = src;
		image.alt = alt;
		if (className) image.classList.add(className);
		image.id = id;
		return image;
	},

	// create an input field
	createInput({
 type = '', name, placeholder, className = '', id = '', value = '', required = true,
	}) {
		const input = document.createElement('input');
		input.type = type;
		input.name = name;
		if (required) input.setAttribute('required', '');
		if (placeholder) input.placeholder = placeholder;
		input.className = className;
		if (id) input.setAttribute('id', id);
		if (value) input.setAttribute('value', value);

		return input;
	},

	// create a paragraph
	createParagraph({ className = '', textContent = '' }) {
		const p = document.createElement('p');
		p.className = className;
		p.textContent = textContent;

		return p;
	},

	// create a label for input field
	createLabel({ attribute = '', textContent = '' }) {
		const label = document.createElement('label');
		label.setAttribute('for', attribute);
		label.textContent = textContent;
		return label;
	},

	// create a text area
	createTextArea({
 name = '', id = '', rows = '', cols = '',
}) {
		const textArea = document.createElement('textarea');
		textArea.name = name;
		textArea.rows = rows;
		textArea.cols = cols;
		if (id) textArea.setAttribute('id', id);

		return textArea;
	},

	// create a select element
	createSelect({ name = '', id, children = [] }) {
		const select = document.createElement('select');
		select.name = name;
		if (id) select.id = id;
		if (children.length) {
			children.forEach((child) => {
			if (child instanceof Element) {
				select.appendChild(child);
			}
			});
		}

		return select;
	},

	// create an option element for a select element
	createOption({ value = '', textContent = '' }) {
		const option = document.createElement('option');
		option.value = value;
		option.textContent = textContent;

		return option;
	},

};

export default Elements;
