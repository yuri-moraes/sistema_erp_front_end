import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import TasksTable from 'src/components/TasksTable';
import { PermissionMiddleware } from 'src/middlewares/PermissionMiddleware';
import { Task } from 'src/models/Task';
import { useRequests } from 'src/utils/requests';

const Tasks = () => {
  const [requestLoading, setRequestLoading] = useState(true);
  const [TasksData, setTasksData] = useState<Task[]>([]);

  const { getTasks } = useRequests();

  const handleGetTasks = async () => {
    const response = await getTasks();

    if (response?.data?.tasks) setTasksData(response.data.tasks);
    else console.error('Error ao obter tasks: ', response.detail);

    setRequestLoading(false);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <PermissionMiddleware codeName="view_task">
      <Helmet>
        <title>Tasks</title>
      </Helmet>

      <PageTitleWrapper>
        <PageTitle
          heading="Tasks"
          subHeading="Consulte as tarefas da empresa e execute ações em cada tarefa"
        />
      </PageTitleWrapper>

      <Container
        maxWidth="xl"
        sx={{
          marginX: requestLoading ? '-10%' : 0,
          transition: 'all .5s'
        }}
      >
        <TasksTable tasksList={TasksData} refreshList={handleGetTasks} />
      </Container>
    </PermissionMiddleware>
  );
};

export default Tasks;
