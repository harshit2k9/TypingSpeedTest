<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Modern Typing Test</title>
	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
	<script src="https://unpkg.com/alpinejs" defer></script>
</head>

<body class="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
	<div x-data="data()" class="w-full max-w-5xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
		<header class="flex justify-between items-center mb-6">
			<h1 class="text-2xl font-bold tracking-wide text-blue-400">⚡ Typing Speed Test</h1>
			<button @click="startTest()" 
					class="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-xl transition duration-200 shadow-lg">
				<span x-text="testStarted ? 'Restart Test' : 'Start Test'"></span>
			</button>
		</header>

		<!-- Main Content Container: Split into Text Area (Left) and Results Sidebar (Right) -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			
			<!-- Left Side: Test Area (Span 2 cols) -->
			<div class="lg:col-span-2 flex flex-col">
				<!-- Target Text Box -->
				<div x-show="question != ''" 
					 class="bg-gray-900 p-5 rounded-xl mb-4 text-gray-300 leading-relaxed text-base tracking-wide border border-gray-700 select-none min-h-[140px] max-h-[200px] overflow-y-auto" 
					 x-text="question">
				</div>
				
				<div x-show="question == ''" class="bg-gray-900 p-5 rounded-xl mb-4 text-gray-500 text-center text-base italic border border-gray-700 min-h-[140px] flex items-center justify-center">
					Click "Start Test" to begin typing...
				</div>

				<!-- Solution Input Area -->
				<div>
					<textarea x-model="solution" 
							  id="solution_textarea" 
							  class="w-full h-36 bg-gray-900 text-gray-100 p-4 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none resize-none text-base leading-relaxed shadow-inner" 
							  placeholder="Start typing the text above here..." 
							  readonly 
							  @input="checkFinished()"></textarea>
				</div>
			</div>

			<!-- Right Side: Statistics Result Dashboard -->
			<div class="bg-gray-900 p-6 rounded-xl border border-gray-700 flex flex-col justify-between space-y-4">
				<h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center border-b border-gray-800 pb-2">Live Metrics</h2>
				
				<div class="text-center">
					<div class="text-xs text-gray-400 uppercase tracking-wider">Time Elapsed</div>
					<div class="text-3xl font-bold text-blue-400 mt-1"><span x-text="time"></span>s</div>
				</div>

				<div class="text-center">
					<div class="text-xs text-gray-400 uppercase tracking-wider">Words Typed</div>
					<div class="text-3xl font-bold text-green-400 mt-1" x-text="words"></div>
				</div>

				<div class="text-center">
					<div class="text-xs text-gray-400 uppercase tracking-wider">Words Per Min (WPM)</div>
					<div class="text-3xl font-bold text-yellow-400 mt-1" x-text="wpm"></div>
				</div>

				<div class="text-center">
					<div class="text-xs text-gray-400 uppercase tracking-wider">Chars Per Min (CPM)</div>
					<div class="text-3xl font-bold text-purple-400 mt-1" x-text="cpm"></div>
				</div>
			</div>

		</div>
	</div>

	<script src="script.js"></script>
</body>
</html>
