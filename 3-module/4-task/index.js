function showSalary(users, age) {
  const usersAge = users.filter((user) => user.age <= age );
  const NameAndBalance = usersAge.map((user) => `${user.name}, ${user.balance}`);
  return NameAndBalance.join('\n');
}
