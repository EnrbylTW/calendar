import styled from 'styled-components';

function viewDiv(){
    document.getElementById('add').style.display = "block";
}

const DivWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GirdWrapper = styled.div`
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(7, 143px);
    grid-template-rows: repeat(6, 120px);
`;


const CellWrapper = styled.div`
    height: 122px;
    width: 145px;
    
    background: #FFFFFF;
    border: 1px solid #292929;
`;

const RowHeader = styled.div`
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6B6B6B;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    flex-direction: row;
    padding: 0px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

const CalendarGrid = ({startDay}) => {
    
    const day = startDay.clone();
    const daysMap = [...Array(42)].map(() => day.add(1, 'day').clone());   
    return(
        <DivWrapper>
            <GirdWrapper>
                {
                    daysMap.map((dayItem) => (
                        <CellWrapper type="button" onmousedown="viewDiv()"
                            key={
                                dayItem.format('DDMMYYYY')
                            }
                        >
                            <RowHeader>
                                {dayItem.format('dddd, D')} 
                            </RowHeader>
                        </CellWrapper>
                    ))
                }
            </GirdWrapper>
        </DivWrapper>
    );
};

export default CalendarGrid;
