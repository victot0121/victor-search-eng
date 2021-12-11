import { createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
     const [ results , setResults ] = useState([]);
     const [isLoading , setIsLoading] = useState(false);
     const [searchTerm, setSearchTerm] = useState('JS Mastery');

     const getResult = async (type) =>{
         setIsLoading(true);

         const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'ba32d6a5c4mshe5af5aaf67fca57p19943fjsne32cefbeff33'
              }
           });

           const data = await response.json();

           if(type.includes('/news')){
               setResults(data.entries);
           } else if(type.includes('/images')){
               setResults(data.image_results);
           }else{
               setResults(data.results)
           }

           setIsLoading(false)
     }
     return(
         <ResultContext.Provider value={{getResult, results, searchTerm, setSearchTerm, isLoading}}>
              {children}
         </ResultContext.Provider>
     )
}

export const useResultContext = () => useContext(ResultContext);