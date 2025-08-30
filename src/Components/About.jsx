

export default function About(props) {
    let myStyle = {
      color: props.darkMode === "dark" ? "white" : "#101422",
      backgroundColor: props.darkMode === "dark" ? "#101422" : "white",
    };

  return (
    <div className="container my-2" style={myStyle}>
      <h2>About Us</h2>
      <hr />
      <br />
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>What is MakeText?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              MakeText is an online text editor that helps you quickly format
              and transform your text. From changing case (UPPERCASE, lowercase,
              Title Case) to styling and cleaning text, we make editing simple
              and efficient.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong> Why Use MakeText?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              No need to install heavy software or complicated tools. MakeText
              is fast, free, and works directly in your browser. It’s perfect
              for students, writers, developers, and content creators who need
              quick text editing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Our Mission</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our mission is to make text editing easy for everyone. We believe
              editing should be simple, fun, and accessible to all. With
              MakeText, you can save time and focus on creating better content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
