// data
import { TailwindColor } from '@/data/TailwindColor';

// ==============================|| COLOR PAGE ||============================== //

export default function ColorPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="card">
          <div className="card-header">
            <h5>Theme Color</h5>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Primary</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-primary-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Secondary</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-secondary-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Success</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-success-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Danger</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-danger-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Warning</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-warning-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Info</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-info-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:contents">
                <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">Dark</div>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-50 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">50</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-100 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">100</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-200 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">200</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-300 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">300</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-400 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">400</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-500 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-600 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">600</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-700 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">700</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-800 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">800</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-900 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">900</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                      <div className="bg-dark-950 h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"></div>
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">950</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Tailwind Color</h5>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
              {Object.entries(TailwindColor).map(([key, { title, values }]) => (
                <div className="2xl:contents" key={key}>
                  <div className="text-sm font-semibold text-slate-900 2xl:col-end-1 2xl:pt-2.5 dark:text-slate-200">{title}</div>

                  <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
                    {Object.entries(values).map(([shade, hex]) => (
                      <div className="relative flex" key={shade}>
                        <div className="flex w-full cursor-pointer items-center gap-x-3 sm:block sm:space-y-1.5">
                          <div
                            className="h-10 w-10 rounded sm:w-full dark:ring-1 dark:ring-white/10 dark:ring-inset"
                            style={{ backgroundColor: hex }}
                          ></div>
                          <div className="px-0.5">
                            <div className="w-6 text-xs font-medium text-slate-900 2xl:w-full dark:text-white">{shade}</div>
                            <div className="font-mono text-xs text-slate-500 lowercase sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs dark:text-slate-400">
                              {hex}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
