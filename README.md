# Currency Converter

This is a simple currency converter web application that allows users to convert amounts between different currencies using an external API for exchange rates.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- Convert amounts between different currencies
- Automatic population of currency dropdowns
- Real-time exchange rates using an external API
- User-friendly interface with country flags for selected currencies

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- [Currency API by fawazahmed0](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies)
- [Flags API](https://flagsapi.com/)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/currency-converter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd currency-converter
    ```
3. Open `index.html` in your preferred web browser.

## Usage
1. **Selecting Currencies:**
   - Use the dropdown menus to select the currencies you want to convert from and to.
   - The dropdowns are automatically populated with currency codes and display corresponding country flags.

2. **Entering Amount:**
   - Enter the amount you want to convert in the input field.

3. **Performing Conversion:**
   - Click the "Convert" button to fetch the conversion rate and display the converted amount.

4. **Viewing Results:**
   - The converted amount will be displayed on the screen along with the selected currencies.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b my-feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
5. Push to the branch:
    ```bash
    git push origin my-feature-branch
    ```
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- The currency conversion data is provided by [fawazahmed0's currency API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies).
- Country flags are fetched from [Flags API](https://flagsapi.com/).
- Special thanks to [APNA College](https://www.youtube.com/c/ApnaCollegeOfficial) on YouTube for the educational content that helped in creating this project.
