<#
.SYNOPSIS
This script orchestrates a series of AI agent tasks to generate a blog post.

.DESCRIPTION
It runs a sequence of gemini command-line calls. Each call invokes an agent to perform a specific step in the content creation workflow. The script ensures that tasks are executed in the correct order.
It also allows for an initial prompt to be passed to the first agent.

.PARAMETER InitialPrompt
An optional prompt to be included in the first agent's task.

.PARAMETER Debug
If present, the script will run all `gemini` commands in debug mode.

.PARAMETER Model
An optional model to be passed to each gemini command.

.EXAMPLE
./run_agents.ps1
This will start the entire agent workflow with the default prompts.

.EXAMPLE
./run_agents.ps1 -InitialPrompt "Focus on the history of the Mazda MX-5."
This will start the workflow and provide the initial prompt to the first agent.

.EXAMPLE
./run_agents.ps1 -d
This will start the workflow with debug mode enabled for all agent tasks.
#>

param (
    [string]$InitialPrompt = "",
    [switch]$Debug,
    [string]$Model = ""
)

function Write-Log {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] $Message" -ForegroundColor $Color
}

$DebugFlag = if ($PSBoundParameters.ContainsKey('Debug')) { "-d" } else { $null }
$ModelFlag = if (-not [string]::IsNullOrEmpty($Model)) { "-m '$Model'" } else { $null }
if ($DebugFlag) {
    Write-Log "🐞 Debug mode enabled." "Magenta"
}

function Start-CancellableSleep {
    param(
        [int]$Seconds
    )

    Write-Log "Task finished. Pausing for $Seconds seconds. Press 'q' to quit." "Gray"

    for ($i = 0; $i -lt $Seconds; $i++) {
        if ([System.Console]::KeyAvailable) {
            $key = [System.Console]::ReadKey($true)
            if ($key.Key -eq 'Q') {
                Write-Log "🛑 Script execution aborted by user." "Red"
                exit
            }
        }
        Start-Sleep -Seconds 1
    }
}

$instructionSuffix = "start with looking at AGENTS.md go from there."

Write-Log "🚀 Starting the agent workflow..." "Green"

# The 'gemini' commands will be executed sequentially.
# The script will wait for each command to finish before starting the next one.

# --- Task 0: Base files setup ---
$firstTaskPrompt = "Command your task is 0. Base files setup"
if (-not [string]::IsNullOrEmpty($InitialPrompt)) {
    $firstTaskPrompt = "$firstTaskPrompt. The user has provided the following initial instructions: '$InitialPrompt'"
    Write-Log "Injecting user's initial prompt into the first task." "Cyan"
}
Write-Log "Executing Task: 0. Base files setup" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "$firstTaskPrompt. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 1. Research and Source Analysis" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 1. Research and Source Analysis. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 2. Content Generation" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 2. Content Generation. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 2.5. Content Editor" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 2.5. Content Editor. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 2.6. Markdown Creator" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 2.6. Markdown Creator. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 3. Add Comments" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 3. Add Comments. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 4. Add Discussion" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 4. Add Discussion. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 5. Build and wrap up" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 5. Build and wrap up. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 6. Audio post process" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 6. Audio post process. $instructionSuffix"
Start-CancellableSleep -Seconds 30

Write-Log "Executing Task: 7. Add audio player" "Yellow"
gemini -y $DebugFlag $ModelFlag -p "Command your task is 7. Add audio player. $instructionSuffix"

Write-Log "✅ All agent tasks completed." "Green" 