let data = [
    {
        name: 'Mazzi',
        age: '30'
    },
    {
        name: 'Art',
        age: '40'
    },
    {
        name: 'Air',
        age: '50'
    },
    {
        name: 'Fred',
        age: '60'
    },
    {
        name: 'Michael',
        age: '70'
    },
    {
        name: 'Jim',
        age: '80'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' +  item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');