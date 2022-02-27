import {
  ErrorButton,
  InfoButton,
  SuccessButton,
  WarningButton,
} from "@components/Home";

export function HomePage() {
  return (
    <div>
      <div>This is the home page</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SuccessButton />
        <WarningButton
          callback={() => {
            // eslint-disable-next-line
            alert("I am a callback on remove");
          }}
        />
        <ErrorButton />
        <InfoButton />
        <InfoButton timer={2000} />
      </div>
    </div>
  );
}
