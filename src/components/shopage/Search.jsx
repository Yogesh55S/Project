/* eslint-disable react/prop-types */

import styles from './Search.module.css';
import { CgSearch } from "react-icons/cg";
const Search = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.searchcontainer}>
        <input type="text" value={value} onChange={onChange} placeholder="Search..." />
        <button>
          <i className={styles.search}><CgSearch /></i>
        </button>
      </div>
    </>
  );
};

export default Search;