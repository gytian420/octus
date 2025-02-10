import React from "react";
const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-white p-8 overflow-hidden">
			{/* Header */}
			<header className="flex justify-between items-center mb-12">
				<img
					src="https://i.ibb.co.com/VY24pg0B/octus-logo.png"
					className="h-6 w-24"
					alt="octus"
				/>
				<div className="flex gap-4">
					<span className="text-blue-800">DOT</span>
					<span className="text-blue-800">CGN</span>
				</div>
			</header>
			{/* Main Title */}
			{/* <div className="text-center mb-16">
        <h1 className="text-4xl font-mono mb-4">
          GIVING AGENTS COMPUTER POWER
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="bg-gray-800 px-3 py-1 rounded">
            Cloud Version $OCTUS
          </span>
          <span className="opacity-50">→</span>
        </div>
        <p className="text-gray-400">
          AES is a new operating system made for agents
        </p>
      </div> */}
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-5xl font-bold text-blue-400 text-center mb-4">
						<span className="bg-white text-blue-400 bg-clip-text">
							GIVING AGENTS COMPUTER POWER
						</span>
					</h1>
					<div className="flex items-center gap-2 mb-8">
						<span className="px-3 py-1 text-blue-400 bg-gray-800/50 rounded-full text-sm border border-gray-700">
							Cloud Version $OCTUS
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="h-4 w-4 text-gray-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							></path>
						</svg>
						<span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm border border-orange-500/50 blur-sm">
							XX XI (You&apos;re Early)
						</span>
					</div>
					<h2 className="text-2xl text-blue-800 text-center mb-16">
						OCTUS is a new operating system made for agents
					</h2>
				</div>
			</div>
			{/* Navigation */}
			<div className="max-w-full mx-auto">
				<div class="flex items-center justify-center gap-8 mb-16">
					<a
						className="text-blue-800 hover:text-white transition-colors hover:underline"
						href="https://OCTUSerator.gitbook.io/OCTUSerator"
					>
						Docs
					</a>
					<span className="text-blue-700">|</span>
					<a
						class="text-blue-800 hover:text-white transition-colors hover:underline"
						href="/memo"
					>
						Memo
					</a>
					<span className="text-blue-700">|</span>
					<a
						class="text-blue-800 hover:text-white transition-colors hover:underline"
						href="https://pypi.org/project/computer-agent/"
					>
						SDK
					</a>
				</div>
			</div>
			{/* Feature Cards */}
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
					<div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 bg-orange-500/20 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
									className="h-6 w-6 text-orange-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									></path>
								</svg>
							</div>
							<h3 className="text-xl text-blue-400 font-semibold">
								Visual Understanding
							</h3>
						</div>
						<p className="text-blue-800">
							SOTA vision language model analyzed with Claude 3.6 Sonnet
						</p>
					</div>
					<div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 bg-orange-500/20 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-brain h-6 w-6 text-orange-500"
								>
									<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
									<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
									<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
									<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
									<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
									<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
									<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
									<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
									<path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
								</svg>
							</div>
							<h3 className="text-xl text-blue-400 font-semibold">
								Memory &amp; Context
							</h3>
						</div>
						<p className="text-blue-800">
							Agents maintain state across actions for complex workflows
						</p>
					</div>
					<div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 bg-orange-500/20 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
									className="h-6 w-6 text-orange-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
									></path>
								</svg>
							</div>
							<h3 className="text-xl text-blue-400 font-semibold">
								Secure Sandboxing
							</h3>
						</div>
						<p className="text-blue-800">
							Agents are isolated with Firejail and Xvfb for security
						</p>
					</div>
				</div>
			</div>
			{/* Terminal Demo Section */}
			{/* <div className="max-w-6xl mx-auto">
				<div className="w-full max-w-6xl aspect-video bg-gray-800 rounded-xl border border-gray-700 mb-16 overflow-hidden relative">
					<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-700/10"></div>
					<video
						poster="/mainscreen.png"
						className="w-full h-full object-cover"
						autoPlay
						loop
						muted
					>
						<source src="./octus.mp4" type="video/mp4" />
					</video>
					<div className="absolute bottom-4 left-4 text-blue-400 bg-gray-900/80 px-3 py-1 rounded-lg text-sm">
						Live Agent Demo - Research Workflow
					</div>
				</div>
			</div> */}
			{/* Core Stack Section */}
			<div className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
					<div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
						<h3 className="text-2xl font-semibold mb-4 text-blue-400">
							Core Stack
						</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-lg font-medium mb-2 text-blue-400">System</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Ubuntu 22.04
									</span>
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Firejail
									</span>
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Xvfb
									</span>
								</div>
							</div>
							<div>
								<p className="text-lg font-medium mb-2 text-blue-400">Vision</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Claude 3.5
									</span>
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Deepseek Janus Pro(in beta)
									</span>
								</div>
							</div>
							<div>
								<p className="text-lg font-medium mb-2 text-blue-400">Memory</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										MCP Protocol
									</span>
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Postgres via PGVector
									</span>
								</div>
							</div>
							<div>
								<p className="text-lg font-medium mb-2 text-blue-400">
									Security
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Sandboxing
									</span>
									<span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400">
										Encryption
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
						<h3 className="text-2xl font-semibold mb-4 text-blue-400">
							Use Cases
						</h3>
						<ul className="list-disc pl-6 space-y-2 text-blue-800">
							<li>
								Polymarket prediction market scalping with live odds analysis
								while monitoring multiple markets
							</li>
							<li>Monitor a NFT drop and auto-buy</li>
							<li>Play chess against multiple opponents simultaneously</li>
							<li>Monitor Twitch streams and clip key moments</li>
							<li>Manage multiple social media personas without hard coding</li>
						</ul>
					</div>
				</div>
			</div>
			{/* Execution Modes */}
			<div className="max-w-4xl mx-auto">
				<div className="w-full max-w-4xl  p-6 bg-gray-800/50 rounded-xl border border-gray-700 mb-16">
					<div className="flex items-start gap-4">
						<div className="flex-1">
							<h3 className="text-2xl font-semibold mb-4 text-blue-400">
								Execution Modes
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 bg-gray-900/50 rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
											data-slot="icon"
											className="h-5 w-5 text-blue-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
											></path>
										</svg>
										<span className="font-medium text-blue-400">
											Cloud Hosted $OCTUS
										</span>
									</div>
									<p className="text-blue-800">
										Full computer use agent via our secure H100 GPU nodes
									</p>
								</div>
								<div className="p-4 bg-gray-900/50 rounded-lg relative group">
									<div className="absolute inset-0 border border-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<div className="flex items-center gap-2 mb-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
											data-slot="icon"
											className="h-5 w-5 text-orange-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
											></path>
										</svg>
										<span className="font-medium text-blue-400 blur-sm">
											Xk#m9 P$rt
										</span>
										<span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full blur-sm">
											Qw@3n
										</span>
									</div>
									<p className="text-blue-800 blur-sm ">
										Ry#t2 acc3$$ t0 d3$kt0p v3r$!0n - c0nt@ct @dm!n
									</p>
								</div>
							</div>
						</div>
						<div className="p-2 bg-gray-900/50 rounded-lg border border-gray-700">
							<button
								type="button"
								role="switch"
								aria-checked="false"
								data-state="unchecked"
								value="on"
								className="data-[state=checked]:bg-orange-500"
							></button>
						</div>
					</div>
				</div>
			</div>
			{/* Mint-now section */}
			<div className="flex flex-col items-center gap-6 mb-16">
				<div className="flex items-center gap-4">
					<a className="relative group blur-sm" href="/portal">
						<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
						<button className="relative bg-orange-500 hover:bg-orange-600 px-12 py-4 rounded-xl text-lg font-semibold transition-all">
							Get Cloud Access <span className="ml-2">→</span>
						</button>
					</a>
					<span className="text-gray-500">&gt;</span>
					<a className="relative group" href="/portal">
						<button className="px-6 py-4 rounded-xl border text-blue-400 border-blue-500/50 hover:border-blue-500  hover:text-white transition-all">
							Mint now
						</button>
					</a>
				</div>
				<p className="text-blue-400 text-sm"> 5555 passes mint • 2.22 SOL</p>
			</div>
			{/* Footer */}
			<div className="max-w-4xl mx-auto">
				<div className="text-center">
					<p className="text-blue-800 text-sm mb-2">Act II...</p>
					<p className="text-blue-800 text-sm text-center md:-ml-0 -ml-4">
						$OCTUS CA:TBA
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
