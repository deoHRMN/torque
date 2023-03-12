export default function MakeForm({
  value,
  setValue,
  handleSubmit,
  buttonText = "Submit",
  handleDelete,
}) {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control p-3"
          placeholder="Write make name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary mt-3">{buttonText}</button>
          {handleDelete && (
            <button onClick={handleDelete} className="btn btn-danger mt-3">
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
