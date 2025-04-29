# Project: CV Application

## Lessons Learned from the Project

- Learned how to add keyboard accessibility to **custom file inputs** by making the `<label>` focusable and handling Enter/Space key events to trigger the hidden file input. Code: `form-controls.jsx`.

  ```JavaScript
  <label
    htmlFor="fileInput"
    tabIndex={0}
    role="button"
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        document.getElementById('fileInput')?.click();
      }
    }}
  >
    Choose File
  </label>
  <input id="fileInput" type="file" style={{ display: 'none' }} />
  ```

- How to prevent the scrollbar from appearing during the slide-in animation of a modal." Code in `modal.css`.

- How to make a `div` maintain its aspect ratio, occupy as much space as possible within its parent, and avoid overflowing. Code in `modal.css`.
