import axios from 'axios';

// Який варіант більш корректний? Знайшов, що аксіос може контролювати за типом що повертається з сервера, чи правильно зрозумів і чи треба то робити, чи лишити контроль типу даних, що повертаються лише самій функції?

async function fetchData<T>(url: string): Promise<T> {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
      }
    }

    async function fetchData1<T>(url: string): Promise<T | undefined> {
          try {
            const response = await axios.get<T>(url);
            return response;
          } catch (error) {
            throw new Error(`Error fetching from ${url}: ${error}`);
          }
        }
    