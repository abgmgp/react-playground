export default function ClickMe() {
    const value = "Click me for test message";

    return (
      <div>
          <button onClick={() => alert(value)}>
            {value}
          </button>
      </div>
    )
  }