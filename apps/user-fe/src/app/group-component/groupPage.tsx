import React from 'react';
import './group.module.scss'

const groupPage = () => {
  return (
    <div>
      <h1>Download Page</h1>
      <p>This is the Download page content.</p>
      <form>
        <label>
          File Name:
          <input type="text" name="fileName" />
        </label>
        <button type="submit">Download</button>
      </form>
    </div>
  );
};

export default groupPage;