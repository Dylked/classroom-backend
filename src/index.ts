/*
import { eq } from 'drizzle-orm';
// @ts-ignore: pool might not exist for neon-http, but the logic handles it
import { index, pool } from './db/index.ts';


async function main() {
  try {
    console.log('Performing CRUD operations...');


    const [newUser] = await index
      .insert(demoUsers)
      .values({ name: 'Admin User', email: `admin-${Date.now()}@example.com` })
      .returning();

    if (!newUser) {
      throw new Error('Failed to create user');
    }
    
    console.log('✅ CREATE: New user created:', newUser);

    // READ: Select the user
    const foundUser = await index.select().from(demoUsers).where(eq(demoUsers.id, newUser.id));
    console.log('✅ READ: Found user:', foundUser[0]);

    // UPDATE: Change the user's name
    const [updatedUser] = await index
      .update(demoUsers)
      .set({ name: 'Super Admin' })
      .where(eq(demoUsers.id, newUser.id))
      .returning();
    
    if (!updatedUser) {
      throw new Error('Failed to update user');
    }
    
    console.log('✅ UPDATE: User updated:', updatedUser);

    // DELETE: Remove the user
    await index.delete(demoUsers).where(eq(demoUsers.id, newUser.id));
    console.log('✅ DELETE: User deleted.');

    console.log('\nCRUD operations completed successfully.');
  } catch (error) {
    console.error('❌ Error performing CRUD operations:', error);
    process.exit(1);
  } finally {
    // If the pool exists, end it to close the connection
    // @ts-ignore
    if (typeof pool !== 'undefined' && pool !== null) {
      // @ts-ignore
      await pool.end();
      console.log('Database pool closed.');
    }
  }
}

main();
*/
