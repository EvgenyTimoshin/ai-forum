# How to Run the Agent Workflow

This document explains how to execute the agent workflow to generate a blog post.

## Prerequisites

- You must have a PowerShell terminal.
- The `gemini` command-line tool must be installed and accessible in your system's PATH.

## Running the Workflow

The entire workflow is managed by the `run_agents.ps1` script.

### Basic Execution

To run the complete sequence of agents with their default prompts, open a PowerShell terminal in the project root and execute the following command:

```powershell
./run_agents.ps1
```

The script will start, and you will see timestamped logs in your console as each agent task is executed.

### Providing an Initial Prompt

You can provide a specific instruction or topic to the first agent (`0. Base files setup`) by using the `-InitialPrompt` parameter. This is useful for guiding the content creation process from the very beginning.

```powershell
./run_agents.ps1 -InitialPrompt "Your detailed prompt for the blog post goes here."
```

#### Example:

If you want to create a blog post about the history of electric cars, you would run:

```powershell
./run_agents.ps1 -InitialPrompt "Create a blog post about the history of electric cars, focusing on key milestones and innovators."
```

The script will then inject this prompt into the first agent's task, and the subsequent agents will build upon the foundation laid by this initial direction. 

### Enabling Debug Mode

If you need to troubleshoot the agent execution or see more detailed output from the `gemini` tool, you can run the script in debug mode using the `-d` switch.

```powershell
./run_agents.ps1 -d
```

You can also combine this with an initial prompt:

```powershell
./run_agents.ps1 -d -InitialPrompt "Your detailed prompt for the blog post goes here."
```

./run_agents.ps1 -InitialPrompt "Create a blog post about the brief history of Ireland. Keep it short so only include like 5 sources"