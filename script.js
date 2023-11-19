let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setMode("ace/mode/python");
    editor.getSession().setMode("ace/mode/java");
    editor.getSession().setMode("ace/mode/html");
    editor.getSession().setMode("ace/mode/css");
};

function runCode() {
    const code = editor.getValue();
    
    // For simplicity, display the code result in the output
    document.getElementById('output').innerText = `Output: ${code}`;
}

