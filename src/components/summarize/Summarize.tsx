import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Summarize = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div id="summarize">
      <div id="reactSpeech">
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button
          className="text-blue-500"
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <textarea
            name="transcript"
            id="transcript"
            className="border border-black"
            rows={25}
            cols={80}
            value={transcript}
          ></textarea>
        </div>
        <div id="summarizedText">
          <textarea
            name="transcript"
            id="transcript"
            className="border border-black"
            rows={25}
            cols={80}
          ></textarea>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 py-2 px-4 rounded-sm">
          Summarize
        </button>
        <select name="format" id="format">
          <option value="paragraph">Paragraph</option>
          <option value="points" selected>
            Points
          </option>
        </select>
        <select name="length" id="length">
          <option value="short">Short</option>
          <option value="medium" selected>
            Medium
          </option>
          <option value="long">Long</option>
        </select>
        {/* We will pass additional commmand prompt as hidden field (give headings of the notes if paragraph format selected) */}
      </div>
    </div>
  );
};

export default Summarize;
