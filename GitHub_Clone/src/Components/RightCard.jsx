

const RightCard = () => {
  return (
    <div className="mt-4 border border-slate-500 rounded-md p-2 mr-3">
        <div>
            <p>Latest changes</p>
            <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
                <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
                <p className="text-xs"> 8 hours ago</p>
            </div>
            <p className="text-sm ml-7">Actions – Secure deployment rollouts to</p>
            <p className="text-sm ml-7">protected environments based on select..</p>
            </div>
            <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
                <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
                <p className="text-xs"> Yesterday</p>
            </div>
            <p className="text-sm ml-7">
GitHub Actions: NODE_OPTIONS is now</p>
            <p className="text-sm ml-7">restricted from GITHUB_ENV</p>
            </div>
            <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
                <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
                <p className="text-xs"> 2 hours ago</p>
            </div>
            <p className="text-sm ml-7">Repository Rules – insight enhancements</p>
           
            </div>
            <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
                <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
                <p className="text-xs"> 2 hours ago</p>
            </div>
            <p className="text-sm ml-7">MaxMind is now a GitHub secret</p>
            <p className="text-sm ml-7">scanning partner</p>
            </div>
            <p className="text-xs text-slate-500 my-2 ml-7">View changelog →</p>


        </div>
    </div>
  )
}

export default RightCard