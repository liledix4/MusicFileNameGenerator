function getInput(htmlID) {
    return document.getElementById(htmlID).value;
}
function getCheckbox(htmlID) {
    return document.getElementById(htmlID).checked;
}
function comeOn() {
    let
        wip = '',
        authors = '',
        editions = '',
        projectsBefore = '',
        projectsAfter = '';
    const input = {
        wip: getInput('wip'),
        authors: [getInput('author1'), getInput('author2'), getInput('author3'), getInput('author4')],
        track_title: getInput('track-title'),
        project_after: getCheckbox('project-after'),
        project: [getInput('project1'), getInput('project2'), getInput('project3'), getInput('project4')],
        edition: [getInput('edition1'), getInput('edition2'), getInput('edition3'), getInput('edition4')]
    };

    if (input.wip !== '') {wip = `(WIP${input.wip}) `;}

    for (let i = 0; i < input.authors.length; i++) {
        if (input.authors[i] !== '') {
            if (i === 1) {authors += ' feat. '}
            if (i !== 0 && i !== 1) {authors += ', '}
            authors += input.authors[i];
        }
    }

    if (input.edition[0] !== '') {
        for (let i = 0; i < input.edition.length; i++) {
            if (input.edition[i] !== '') {
                editions += ' (' + input.edition[i] + ')';
            }
        }
    }

    if (input.project[0] !== '') {
        if (input.project_after) {
            projectsAfter += ' [';
            for (let i = 0; i < input.project.length; i++) {
                if (input.project[i] !== '') {
                    if (i !== 0) {projectsAfter += ' x ';}
                    projectsAfter += input.project[i];
                }
            }
            projectsAfter += ']';
        }
        else {
            projectsBefore += ' - ';
            for (let i = 0; i < input.project.length; i++) {
                if (input.project[i] !== '') {
                    if (i !== 0) {projectsBefore += ' x ';}
                    projectsBefore += input.project[i];
                }
            }
        }
    }

    const result = wip + authors + projectsBefore + ' - ' + input.track_title + editions + projectsAfter;
    document.getElementById('result').innerHTML = result;
    document.getElementById('result-wrapper').setAttribute('class', 'show');
    console.log(input);
}

document.getElementById('submit').addEventListener('click', comeOn, false);