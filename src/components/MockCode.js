
const jsonData = require('../data/MOCK_DATA.json');

const MockCode = () =>{
    return(
        jsonData && (
            <pre className="language-json line-numbers">
                <code className="language-json">
                {JSON.stringify(jsonData, null, 2)}
                </code>
            </pre>
            )
    )
}


export {MockCode}