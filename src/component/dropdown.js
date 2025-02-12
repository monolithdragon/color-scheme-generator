import { modes } from './mode';

const dropdownHeader = document.querySelector('.dropdown-header');
const dropdownOptions = document.querySelector('.dropdown-options');

function renderOptions(options) {
	return options
		.map(
			(option) => `
  <li data-value="${option}">${option}</li>
  `
		)
		.join('');
}

function createDropdown() {
	dropdownOptions.innerHTML = renderOptions(modes);
}

function handleSelection() {
	const options = document.querySelectorAll('.dropdown-options li');

	if (options) {
		options.forEach((option) => {
			option.addEventListener('click', () => {
				const selectedValue = option.getAttribute('data-value');

				dropdownHeader.querySelector('#dropdown-mode').textContent =
					selectedValue;

				dropdownOptions.style.display = 'none';
			});
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	createDropdown();
	handleSelection();
});

dropdownHeader.addEventListener('click', () => {
	dropdownOptions.style.display =
		dropdownOptions.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
	if (!event.target.closest('.dropdown')) {
		dropdownOptions.style.display = 'none';
	}
});
