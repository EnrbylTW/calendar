import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 1440px;
    height: 100px;

    background: #F4F4F4;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 12px;
    gap: 10px;

    width: 1024px;
    height: 100px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 20px;
    gap: 10px;

    width: 1000px;
    height: 48px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 169px;
    height: 26px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

const AreaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 175px;
    height: 28px;

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const AddWrapper = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;

    width: 80px;
    height: 26px;

    background: #0271C7;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border-color: #0271C7; 

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;
`;

const UpdateWrapper = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;

    width: 79px;
    height: 26px;

    background: #0271C7;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border-color: #0271C7; 

    flex: none;
    order: 1;
    flex-grow: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;
`;

const Header = () => (
    <DivWrapper>
        <ContainerWrapper>
            <ControlWrapper>

                <ButtonWrapper>
                    <AddWrapper>Добавить</AddWrapper>
                    <UpdateWrapper>Обновить</UpdateWrapper>
                </ButtonWrapper>

                <AreaWrapper>
                    <input className="searchHeader" type="search" name="event" placeholder="Placeholder" />
                </AreaWrapper>

            </ControlWrapper>
        </ContainerWrapper>
    </DivWrapper>
);

export default Header;
