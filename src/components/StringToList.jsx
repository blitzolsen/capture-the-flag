export default function StringToList({ string }) {
    const getList = () => {
        return string.split('').map((char, index) => (
            <li key={index}>{char}</li>
        ));
    };

    return <ul>{getList()}</ul>;
}
