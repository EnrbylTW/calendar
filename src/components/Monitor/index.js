import styled from 'styled-components';

const MonitorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 1000px;
    height: 48px;
`;

const TextWrapper = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-left: 8px;
    margin-right: 8px;

    outline: unset;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

const ButtonWrapper = styled.button`
    width: 32px;
    height: 24px;

    background: #FFFFFF;

    border-radius: 5px;
    border-color: #CDCDCD;
    box-shadow: 0px 1px 1px rgba(0, 0, 255, 0.25);

    flex: none;
    order: 2;
    flex-grow: 0;

    margin: 8px;

    outline: unset;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    cursor: pointer;
`;

const TodayWrapper = styled.button`
    width: 59px;
    height: 18px;

    background: #FFFFFF;

    border-radius: 5px;
    border-color: #CDCDCD;
    box-shadow: 0px 1px 1px rgba(0, 0, 255, 0.25);

    flex: none;
    order: 1;
    flex-grow: 0;

    margin: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    outline: unset;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    cursor: pointer;
`;

const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => (
    <MonitorWrapper>
        <DivWrapper>
            <div>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
                <TextWrapper>{today.format('MMMM YYYY')}</TextWrapper>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
                <TodayWrapper onClick={todayHandler}>Сегодня</TodayWrapper>
            </div>
        </DivWrapper>
    </MonitorWrapper>        
);

export default Monitor;
