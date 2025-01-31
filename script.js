document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const languageSelect = document.getElementById('language-select');
    const runBtn = document.getElementById('run-btn');
    const output = document.getElementById('output');

    // Function to update code syntax highlighting
    function updateHighlight() {
        const code = codeInput.value;
        const language = languageSelect.value;
        codeOutput.innerHTML = hljs.highlight(code, { language: language }).value;
    }

    // Listen for input or language change to update syntax highlighting
    codeInput.addEventListener('input', updateHighlight);
    languageSelect.addEventListener('change', updateHighlight);

    // Function to handle code execution on 'Run Code' click
    runBtn.addEventListener('click', () => {
        const code = codeInput.value;
        const language = languageSelect.value;

        let result = '';

        switch (language) {
            case 'javascript':
                try {
                    // Try to execute JavaScript code
                    result = eval(code);
                } catch (e) {
                    // Show error message if syntax is wrong
                    result = `JavaScript Error: ${e.message}`;
                }
                break;

            case 'python':
                try {
                    // Simulate Python execution (for demonstration purposes)
                    // In a real scenario, we would use Pyodide or a backend to execute Python
                    if (code.includes('print')) {
                        result = `Python output: ${code.replace('print', '')}`;
                    } else {
                        throw new Error('Invalid Python syntax');
                    }
                } catch (e) {
                    result = `Python Error: ${e.message}`;
                }
                break;

            case 'html':
                // Display HTML output as a live preview
                try {
                    result = `HTML output: <div>${code}</div>`;
                    document.getElementById('html-preview').innerHTML = code; // Simulate HTML rendering
                } catch (e) {
                    result = `HTML Error: ${e.message}`;
                }
                break;

            case 'css':
                // Apply CSS styles to a dummy element for visual output
                try {
                    document.getElementById('css-output').style.cssText = code;
                    result = 'CSS applied successfully';
                } catch (e) {
                    result = `CSS Error: ${e.message}`;
                }
                break;

            default:
                result = 'Select a language and write some code to see the output.';
        }

        // Show the result or any errors in the output area
        output.textContent = result;
    });

    // Initial syntax highlighting
    updateHighlight();
});
