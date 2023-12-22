document.addEventListener('DOMContentLoaded', function () {
  const liItems = document.querySelectorAll('ul li');
  const imgItems = document.querySelectorAll('.product img');

  liItems.forEach(li => {
    li.addEventListener('click', function () {
      // Toggle "active" class
      liItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      // Filter images
      const filterValue = this.textContent.toLowerCase();
      imgItems.forEach(img => {
        const imgFilter = img.getAttribute('data-filter').toLowerCase();
        img.style.display = (filterValue === 'all menu' || imgFilter === filterValue) ? 'block' : 'none';
      });
    });
  });
});

/* JavaScript Explanation:
This script enhances the webpage by adding dynamic behavior. It waits for the HTML content to be fully loaded (DOMContentLoaded event) before executing.

1. It selects all list items and product images on the page.
2. For each list item, it adds a click event listener.
3. When a list item is clicked, it toggles the "active" class, changing the background color to indicate the selected category.
4. It retrieves the text content of the clicked list item and converts it to lowercase.
5. It iterates through each product image, comparing the data-filter attribute (converted to lowercase) with the selected category.
6. If the selected category is "all menu" or matches the image's category, the image is displayed; otherwise, it is hidden.

In summary, this script makes the webpage interactive. When a user clicks on a category in the navigation list, it highlights the selected category and filters the displayed images accordingly.
*/
