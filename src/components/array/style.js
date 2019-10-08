import styled from 'styled-components'

export const RowWrapper = styled.table`
	justify-content: center;
	margin: auto;
`

export const CenteredColumn = styled.td`
	vertical-align: middle;
`
export const Square = styled.div`	
    background: ${props => props.current}
    height: ${props => props.value}px
    width: 8px;
`
