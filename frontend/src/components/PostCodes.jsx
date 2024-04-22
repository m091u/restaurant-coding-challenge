const PostCodes = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="postcode">
      <label htmlFor="postcode">Select a post code: </label>
      <select id="postcode" onChange={handleChange}>
        <option value="CT1 2EH">CT1 2EH</option>
        <option value="SW1A 1AA">SW1A 1AA</option>
        <option value="BN1 1AE">BN1 1AE</option>
        <option value="PL4 0DW">PL4 0DW</option>
        <option value="BS1 4DJ">BS1 4DJ</option>
        <option value="CF11 8AZ">CF11 8AZ</option>
        <option value="CB7 4DL">CB7 4DL</option>
        <option value="B26 3QJ">B26 3QJ</option>
        <option value="M16 0RA">M16 0RA</option>
        <option value="LS2 7HY">LLS2 7HY</option>
        <option value="DH4 5QZ">DH4 5QZ</option>
        <option value="NE9 7TY">NE9 7TY</option>
        <option value="EH1 1RE">EH1 1RE</option>
        <option value="G3 8AG">G3 8AG</option>
        <option value="BT7 1NN">BT7 1NN</option>
        <option value="L4 0TH">L4 0TH</option>
      </select>
    </div>
  );
};

export default PostCodes;
