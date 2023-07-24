<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\ShopKeeper;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create roles in Db
        $adminRole = Role::create(['name' => 'admin','guard_name' => 'admins']);
        $shopkeeprRole = Role::create(['name' => 'shopkeeper','guard_name' => 'shopkeepers']);
        $userRole = Role::create(['name' => 'user','guard_name' => 'users']);

        // $user = User::create([
        //     'name' => 'Pankita Chavda',
        //     'email' => 'pankita@mailnator.com',
        //     'password' => bcrypt('password123'),
        // ]);
        // $user->assignRole($userRole);



    }
}
