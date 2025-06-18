const articles = [
  {
    id: 1,
    title: "Creating an Auto-Closing Notification With an HTML Popover",
    date: "June 9, 2025",
    content:
      "The HTML popover attribute transforms elements into top-layer elements that can be opened and closed with a button or JavaScript. Most popovers can be light-dismissed, closing when the user clicks or taps outside the popup. Currently, HTML popover lacks built-in auto-close functionality, but it’s easy to add. Auto closing popups are useful for user interfaces like banner notifications — the new-message alerts in phones, for instance.Hiding the popover with a CSS transitionOK, so the challenge is that we have a popover that is shown when a certain button is clicked, but it cannot be dismissed. The button is only wired up to show the popover, but it does not hide or toggle the popover (since we are not explicitly declaring it). We want the popover to show when the button is clicked, then dismiss itself after a certain amount of time.The HTML popover can’t be closed with CSS, but it can be hidden from the page. Adding animation to that creates a visual effect. In our example, we will hide the popover by eliminating its CSS height property. You’ll learn in a moment why we’re using height, and that there are other ways you can go about it.We can indeed select the popover attribute using an attribute selector:",
  },
  {
    id: 2,
    title: "How JavaScript Was Written Back In the Day",
    date: "june 12, 2025",
    content:
      "Have you ever been curious how JavaScript was written back in the day? I was, so I dug into some of the early frameworks and libraries to see what I could learn.I spent the last week diving into code from 2006-2015. I was expecting to cringe at old patterns and appreciate how far we’ve come. Instead, I found myself surprisingly impressed by some of the solutions these early frameworks came up with.Web development in 2006 meant dealing with browser inconsistencies. Internet Explorer 6 had most of the market share, and it did things differently. Event handling varied between browsers. CSS selector support was limited.",
  },
  {
    id: 3,
    title: "7 common CSS navigation menu mistakes and how to fix them",
    date: "Jan 05, 2021",
    content:
      "Have you ever designed a navigation menu from scratch only to discover an unexpected error, such as mobile compatibility issues, broken keyboard navigation, or misbehaving dropdow We’ve all been there!The truth is that these types of errors are extremely common, even among seasoned developers. In this article, I’ll walk through seven common navigation menu mistakes and how to fix them cleanly, responsively, and accessibly — using only CSS.Mistake 1: Not adding a delay when closing dropdownsWhen users navigate through dropdown menus, they often need to move their cursor diagonally to reach submenu items. Now, imagine you have a dropdown menu with no delay mechanism, just running the following code:",
  },
];

export default articles;
