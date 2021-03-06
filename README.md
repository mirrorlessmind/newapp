# newapp
Create a share app to define issues.

1. Create a header/hero area that welcomes users to the application and displays the current time and date using Moment.js with `setInterval()`.

2. Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a [Bootstrap modal dialog](https://getbootstrap.com/docs/4.5/components/modal/).

3. The modal should contain a form asking users to fill in the following data:

    * The name of the project

    * The type of project (use a `<select>` drop-down)

    * The hourly wage for the project

    * The due date for the project (use jQuery UI's datepicker with a minimum date setting in place)

4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:

    * Project name

    * Project type

    * Hourly wage

    * Due date

    * Days until the due date (use Moment.js to calculate)

    * Estimated total earned (hourly wage at 8 hours per day multiplied by the number of days until the due date)

While you build, remember the following guidelines:

  * Ensure that any elements you need to interact with using JavaScript/jQuery are properly identified (e.g., form elements, the table body, etc.).

  * Use different `<input>` element attributes to help enforce rules, like different `type` attribute values, minimum values, and required! See the [MDN web docs on the HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more guidance.

  * When in doubt, read the Bootstrap documentation.
