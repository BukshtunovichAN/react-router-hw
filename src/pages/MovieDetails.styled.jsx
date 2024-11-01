
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`  
display: flex;
gap: 20px; 
margin: 20px 0;
`
export const PosterContainer = styled.div`
max-width: 694px;
height: 450px; 
overflow: hidden;
`
export const Poster = styled.img`  
width: 100%; 
height: 100%; 
object-fit: contain;`

export const Info = styled.div`  
width: 70%;`

export const Title = styled.h2`  
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;`

export const Score = styled.p`  
font-size: 16px;
margin-bottom: 10px;`

export const Overview = styled.h3`  
margin-bottom: 20px;`

export const Genres = styled.h3`  
margin-bottom: 20px;`

export const AdditionalInfo = styled.p`  
font-weight: bold;
border-top: 1px solid #ccc;
padding-top: 20px;
margin-top: 20px;
margin-bottom: 5px`

export const InfoList = styled.ul`  
    list-style: none;
    padding: 0;
    margin: 0;
`

export const InfoLink = styled(Link)`  
    text-decoration: none;
    color: black;
    font-size: 16px;
    list-style: none;
     line-height: 1.5;
     transition: font-size 0.5s ease-out;
     border-bottom: 0 solid black;
    &:hover, &:focus {
    color: purple;
    font-weight: bold;
    font-size: 20px;
    border-bottom-width: 3px;
  }
`