<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class EnvirementSetup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:cache';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'clear cache';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {



        return Command::SUCCESS;
    }
}
