import { ErrorButton, InfoButton, SuccessButton, WarningButton } from "@components/Home"

export const HomePage = () => {
    return <div>
        <div>This is the home page</div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <SuccessButton />
            <WarningButton />
            <ErrorButton />
            <InfoButton />
            <InfoButton timer={2000}/>
        </div>
    </div>
}